const defaultStyles = [
    [`aspect-square`, { aspectRatio: 1 }],
    [`aspect-video`, { aspectRatio: 16 / 9 }],
    [`items-center`, { alignItems: `center` }],
    [`items-start`, { alignItems: `flex-start` }],
    [`items-end`, { alignItems: `flex-end` }],
    [`items-baseline`, { alignItems: `baseline` }],
    [`items-stretch`, { alignItems: `stretch` }],
    [`justify-start`, { justifyContent: `flex-start` }],
    [`justify-end`, { justifyContent: `flex-end` }],
    [`justify-center`, { justifyContent: `center` }],
    [`justify-between`, { justifyContent: `space-between` }],
    [`justify-around`, { justifyContent: `space-around` }],
    [`justify-evenly`, { justifyContent: `space-evenly` }],
    [`content-start`, { alignContent: `flex-start` }],
    [`content-end`, { alignContent: `flex-end` }],
    [`content-between`, { alignContent: `space-between` }],
    [`content-around`, { alignContent: `space-around` }],
    [`content-stretch`, { alignContent: `stretch` }],
    [`content-center`, { alignContent: `center` }],
    [`self-auto`, { alignSelf: `auto` }],
    [`self-start`, { alignSelf: `flex-start` }],
    [`self-end`, { alignSelf: `flex-end` }],
    [`self-center`, { alignSelf: `center` }],
    [`self-stretch`, { alignSelf: `stretch` }],
    [`self-baseline`, { alignSelf: `baseline` }],

    [`direction-inherit`, { direction: `inherit` }],
    [`direction-ltr`, { direction: `ltr` }],
    [`direction-rtl`, { direction: `rtl` }],

    [`hidden`, { display: `none` }],
    [`flex`, { display: `flex` }],

    [`flex-row`, { flexDirection: `row` }],
    [`flex-row-reverse`, { flexDirection: `row-reverse` }],
    [`flex-col`, { flexDirection: `column` }],
    [`flex-col-reverse`, { flexDirection: `column-reverse` }],
    [`flex-wrap`, { flexWrap: `wrap` }],
    [`flex-wrap-reverse`, { flexWrap: `wrap-reverse` }],
    [`flex-nowrap`, { flexWrap: `nowrap` }],

    [`flex-auto`, { flexGrow: 1, flexShrink: 1, flexBasis: `auto` }],
    [`flex-initial`, { flexGrow: 0, flexShrink: 1, flexBasis: `auto` }],
    [`flex-none`, { flexGrow: 0, flexShrink: 0, flexBasis: `auto` }],

    [`overflow-hidden`, { overflow: `hidden` }],
    [`overflow-visible`, { overflow: `visible` }],
    [`overflow-scroll`, { overflow: `scroll` }],

    [`absolute`, { position: `absolute` }],
    [`relative`, { position: `relative` }],

    [`italic`, { fontStyle: `italic` }],
    [`not-italic`, { fontStyle: `normal` }],

    // [`oldstyle-nums`, fontVariant(`oldstyle-nums`)],
    // [`small-caps`, fontVariant(`small-caps`)],
    // [`lining-nums`, fontVariant(`lining-nums`)],
    // [`tabular-nums`, fontVariant(`tabular-nums`)],
    // [`proportional-nums`, fontVariant(`proportional-nums`)],

    [`font-thin`, { fontWeight: `100` }],
    [`font-100`, { fontWeight: `100` }],
    [`font-extralight`, { fontWeight: `200` }],
    [`font-200`, { fontWeight: `200` }],
    [`font-light`, { fontWeight: `300` }],
    [`font-300`, { fontWeight: `300` }],
    [`font-normal`, { fontWeight: `normal` }],
    [`font-400`, { fontWeight: `400` }],
    [`font-medium`, { fontWeight: `500` }],
    [`font-500`, { fontWeight: `500` }],
    [`font-semibold`, { fontWeight: `600` }],
    [`font-600`, { fontWeight: `600` }],
    [`font-bold`, { fontWeight: `bold` }],
    [`font-700`, { fontWeight: `700` }],
    [`font-extrabold`, { fontWeight: `800` }],
    [`font-800`, { fontWeight: `800` }],
    [`font-black`, { fontWeight: `900` }],
    [`font-900`, { fontWeight: `900` }],

    [`include-font-padding`, { includeFontPadding: true }],
    [`remove-font-padding`, { includeFontPadding: false }],

    // not sure if RN supports `max-width: none;`, but this should be equivalent
    [`max-w-none`, { maxWidth: `99999%` }],

    [`text-left`, { textAlign: `left` }],
    [`text-center`, { textAlign: `center` }],
    [`text-right`, { textAlign: `right` }],
    [`text-justify`, { textAlign: `justify` }],
    [`text-auto`, { textAlign: `auto` }], // RN only

    [`underline`, { textDecorationLine: `underline` }],
    [`line-through`, { textDecorationLine: `line-through` }],
    [`no-underline`, { textDecorationLine: `none` }],

    [`uppercase`, { textTransform: `uppercase` }],
    [`lowercase`, { textTransform: `lowercase` }],
    [`capitalize`, { textTransform: `capitalize` }],
    [`normal-case`, { textTransform: `none` }],

    [`w-auto`, { width: `auto` }],
    [`h-auto`, { height: `auto` }],

    // default box-shadow implementations
    [
        `shadow-sm`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowRadius: 1,
            shadowOpacity: 0.025,
            elevation: 1,
        },
    ],
    [
        `shadow`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowRadius: 1,
            shadowOpacity: 0.075,
            elevation: 2,
        },
    ],
    [
        `shadow-md`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowRadius: 3,
            shadowOpacity: 0.125,
            elevation: 3,
        },
    ],
    [
        `shadow-lg`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 8,
        },
    ],
    [
        `shadow-xl`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowOpacity: 0.19,
            shadowRadius: 20,
            elevation: 12,
        },
    ],
    [
        `shadow-2xl`,
        {
            shadowOffset: { width: 1, height: 1 },
            shadowColor: `#000`,
            shadowOpacity: 0.25,
            shadowRadius: 30,
            elevation: 16,
        },
    ],
    [
        `shadow-none`,
        {
            shadowOffset: { width: 0, height: 0 },
            shadowColor: `#000`,
            shadowRadius: 0,
            shadowOpacity: 0,
            elevation: 0,
        },
    ],
];

export default defaultStyles;
