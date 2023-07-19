import React, { useState, useRef, useEffect } from 'react'
import axios from "axios";
import {
    FormBuilderV4 as DynamoEngine,
    useHistory,
    actionsRunner, // useDynamoHistory,
    transformer,
} from "dynamo";
import { renderComponent, validationResolver } from "../components";
import useDynamoHistory from "../Helper/useDynamoHistory"
import _ from "lodash"

import * as services from "../Helper/Services";


function isURL(value) {
    return (
        value?.startsWith("http://") ||
        value?.startsWith("https://") ||
        value?.startsWith("data:image")
    );
}

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-APP-PLATFORM": "android", ///Platform.OS.toUpperCase(),
    "X-APP-VERSION": "0.9.13",
    "X-APP-ENVIRONMENT": "",
};

const instance = axios.create({
    baseURL: 'https://uat-maya.maybank.com.my/',
    timeout: 1000,
    headers
});


const DynamoScreen = () => {
    const myForm = useRef(null);
    const [showLoader, setShowLoader] = useState(false);
    const [data, setData] = useState({});
    const [items, setItems] = useState(null);
    const [currentJson, setCurrentJson] = useState(null);

    const [authorisation, updateAuthorisation] = useState(null);

    const dynamoRef = useRef(null);

    const [loading, setLoading] = useState(false);
    // const [currentJson, setCurrentJson] = useState(null);
    const [dataStore, setDataStore] = useState({})

    const {
        current: state,
        currentIndex,
        history,
        goBack: historyGoBack,
        insertObject: setState,
        updateCurrent,
        getHistory,
        toggleBasket,
        insertBasket,
        getBasket,
        clearBasket,
        makeBasket,
        destroyBasket,
        getCurrentBasket,
    } = useDynamoHistory([], "name", 0, false, true);

    useEffect(() => {

        // instance.post('v2/users/getTokens', {
        //     "m2uUserName": "ahmad2019",
        //     "m2uPassword": "pass1234"
        // }).then(response => {
        //     console.log(response, 'loginnnnnnn lalalalal');
        //     setDataStore({...dataStore, ...response.data })
        //     fetchDynamoJson("https://dynamobff.maybanksandbox.com/forms/6465992c013c34001c1875cc");

        //     // updateAuthorisation(response.data)
        // })

        fetchDynamoJson("https://dynamobff.maybanksandbox.com/forms/649a6299013c34001c18e6f6");


    }, []);

    const fetchDynamoJson = (uri) => {
        axios
            .get(uri)
            .then((res) => {
                setData(res.data?.defaultValues);
                setCurrentJson(res.data);
                setState(res.data);
                return res.data;
            })
            .catch((err) => setShowLoader(false));
    };

    const transforming = (config) => (dataStore) => async (item) => {
        return new Promise(async (resolve, reject) => {
            const { destination = "transforming", source, schema } = config;
            const input = _.get(item, source);
            try {
                const result = await transformer(input, schema);
                console.log("actionzzzz", "transform", input, config, dataStore);

                resolve({
                    ...item,
                    ..._.set(item, destination, result),
                });
            } catch {
                reject("hmmmmmmmmm");
            }
        });
    };

    const navigateTo = (config) => (dataStore) => async (item) => {
        return new Promise(async (resolve, reject) => {
            const { destination = "navigateTo", actionURL, schema } = config;
            if (isURL(actionURL)) {
                // const result = await axios.get(actionURL, false, {});
                const result = await fetchDynamoJson(actionURL);
                console.log("actionzzzz", "navigateTo", result, config, dataStore);

                resolve({
                    ...item,
                    ..._.set(item, destination, result),
                });
            }
            reject("it is failed due to url !!!");
        });
    };

    const fetchAPIData = (config) => (dataStore) => async (item) => {
        console.log(
            `fetchAPIData: ${JSON.stringify(config)} ${JSON.stringify(dataStore)} ${JSON.stringify(
                item
            )}`
        );
        return new Promise(async (resolve, reject) => {
            const { destination = "fetchData", apiParams, actionAPI } = config;

            const apiReqObj = services[actionAPI](apiParams) || null;
            if (apiReqObj) {
                try {
                    console.log(apiReqObj,'apiReqObjapiReqObjapiReqObj', dataStore)
                    const result = await apiReqObj(dataStore?.access_token);
                    console.log("actionzzzz", "navigateTo", result.data, config, dataStore);
                    dataStore[actionAPI] = result?.data;
                    console.log("dataStore: ", dataStore);
                    setDataStore((prevDataStore) => ({ ...prevDataStore, ...dataStore }));
                    resolve({
                        ...item,
                        ..._.set(item, destination, result?.data),
                    });
                } catch (e) {
                    reject(e);
                }
            }
        });
    };

    const managedCallbackOLD = async ({ item }, overrideAction = null) => {
        const action = overrideAction ?? item.action;
        // If has action
        if (action) {
            if (action.actionType === "alert") {
                alert(item.action?.actionText);
                return true;
            } else if (action.actionType === "modal") {
                return true;
            } else if (action.actionType === "handleClose") {
                alert("handleClose. Is Closing");
                return true;
            } else if (action.actionType === "handleMore") {
                alert("handleMore. More Setting Hidden Here");
                return true;
            } else if (action.actionType === "navigateBack") {
                //navigation.goBack();
                return true;
            } else if (action.actionType === "navigateBackTo") {
                setShowLoader(true);
                try {
                    const jsonId = action.actionURL.split("/").pop();
                    //const history = state.histories.find((i) => i.jsonObj._id == jsonId);

                    //setCurrentJson(history.jsonObj);
                    //console.log("setData-i'm her-setCurrentJson", history.data);
                    //setData(history.data);
                    // setTimeout(() =>{ console.log("setTimeout", data), setItems(history.jsonObj.items)}, 5000);

                    console.log("setData-i'm here-currentData?", data);
                    // actions.globalRemoveHistory(jsonId);
                } catch (ex) {
                    alert(JSON.stringify(ex));
                }

                //setTimeout(() => setShowLoader(false), 500);
                return true;
            } else if (action.actionType === "navigateTo") {
                setShowLoader(true);
                try {
                    //console.log("myForm", myForm);
                    const formData = await dynamoRef.current.getValues();
                    //actions.globalAppendHistory({ jsonObj: currentJson, data: formData });
                    fetchDynamoJson(action.actionURL);
                    //setTimeout(() => fetchDynamoJson(action.actionURL), 500);
                } catch (ex) {
                    alert(JSON.stringify(ex));
                }

                //setTimeout(() => setShowLoader(false), 500);
                return true;
            } else if (action.actionType === "openURL") {
                //Linking.openURL(action.actionURL);
                return true;
            }
        }

        //Get dynamo (form) values
        const formData = await dynamoRef.current.getValues();

        //false means error is there
        //otherwise the data object returns
        if (!formData) return null;

        //just sample store data in component
        console.log("setData-i'm here???");
        // setData(formData);
        return true;
    };

    const managedCallback = async ({ item, data = null, validate = true }) => {
        const formData = await dynamoRef.current.getValuesBackground(false);
        updateCurrent({ ...state(), defaultValues: { ...formData }, snapshot: { ...formData } });

        if (item && item.action && typeof item.action === "object") {
            const allLocalFunction = dynamoRef.current.localFunction;
            let polyAction = item.action;
            if (polyAction.actionURL) {
                const { actionURL, actionType } = item.action;
                polyAction = {
                    [actionType]: {
                        actionURL,
                    },
                };
            }
            const result = await actionsRunner(
                polyAction,
                allLocalFunction,
                { "x-item": item, dataStore },
                dataStore
            );
            // .then((lastResult) => {
            //     console.log("managedCallback Lastresult:", lastResult);
            //     setDataStore(lastResult?.dataStore);
            //     console.log("managedCallback Last result:", dataStore?.listBank, lastResult?.dataStore);
            // })
            // .catch((error) => {
            //     console.error("managedCallback An error occurred:", error);
            // });
            console.log("managedCallback Lastresult:", result);
            setDataStore(result?.dataStore);
            console.log("managedCallback Last result:", dataStore?.listBank, result?.dataStore);
        }

        // const formData = await dynamoRef.current.getValues();
        // console.log(formData, 'yassssssssss')
        // // throw Error('ffsdf')
        // if (validate) {
        //     const formData = await dynamoRef.current.getValues();
        //     console.log(formData, 'yassssssssss')
        //     if (formData === false) return false;
        // }

        // // If has action
        // if (item?.action && item?.action?.actionType !== "") {
        //     return localFunction[item.action.actionType]({ item, data, form: dynamoRef.current });
        // }

        return true;
    };

    const getDataStore = () => {
        return {
            cache: getHistory(),
            basket: getCurrentBasket(),
            ...dataStore
        };
    };

    const localFunction = {
        fetchAPIData: fetchAPIData,
        transformer: transforming,
        navigateTo
    }

    console.log(getDataStore(), "yasssserHistoryyyyyy");

    return (
        <DynamoEngine
            ref={dynamoRef}
            key={`dynamo-${state()?._id}`}
            name={`dynamo-${state()?._id}`}
            items={state()?.items}
            defaultValues={state()?.defaultValues ?? {}}
            components={renderComponent}
            managedCallback={managedCallback}
            localFunction={localFunction}
            validationResolver={validationResolver}
            dataStore={{
                ...dataStore,
                ...getDataStore(),
            }}
            devMode={false}
        />
    )
}

export default DynamoScreen