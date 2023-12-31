import { View, StyleSheet } from "react-native";


const props = {
    fullWidth: false,
    centerItems: false,
    marginHorizontal: 0,
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    children: null,
    gap: 0,
}


const Container = ({
    fullWidth, centerItems,
    marginHorizontal, marginVertical,
    marginTop, marginBottom, marginLeft, marginRight,
    paddingVertical, paddingHorizontal,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
    gap = 0,
    children
} = props) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: fullWidth ? '100%' : 'fit-content',
            justifyContent: centerItems ? 'center' : 'flex-start',
            alignItems: centerItems ? 'center' : 'flex-start',
            marginHorizontal: marginHorizontal,
            marginVertical: marginVertical,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,

        }
    });

    return (
        <View style={styles.container}>
            {children}
        </View >
    );
}

Container.Row = (
    {
        fullWidth, centerItems,
        marginHorizontal, marginVertical,
        marginTop, marginBottom, marginLeft, marginRight,
        paddingVertical, paddingHorizontal,
        paddingTop, paddingBottom, paddingLeft, paddingRight, gap = 0,
        children
    } = props
) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: fullWidth ? '100%' : 'fit-content',
            justifyContent: centerItems ? 'center' : 'flex-start',
            alignItems: centerItems ? 'center' : 'flex-start',
        }
    });

    return (
        // <View style={styles.container}>
        //     {children}
        // </View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: marginHorizontal,
            marginVertical: marginVertical,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        }}>
            {
                children.length === undefined ?
                    children :
                    children.map((child, index) => {
                        return (
                            <View key={index} style={{ ...styles.container, marginRight: index === children.length - 1 ? 0 : gap }}>
                                {child}
                            </View>
                        )
                    })
            }
        </View >
    );
}

Container.Column = (
    {
        fullWidth, centerItems,
        marginHorizontal, marginVertical,
        marginTop, marginBottom, marginLeft, marginRight,
        paddingVertical, paddingHorizontal,
        paddingTop, paddingBottom, paddingLeft, paddingRight, gap = 0,
        children
    } = props
) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: fullWidth ? '100%' : 'fit-content',
            justifyContent: centerItems ? 'center' : 'flex-start',
            alignItems: centerItems ? 'center' : 'flex-start',
        }
    });
    return (
        <View
            style={{
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
                paddingVertical: paddingVertical,
                paddingHorizontal: paddingHorizontal,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
            }}

        >
            {
                children.length === undefined ?
                    children :
                    children.map((child, index) => {
                        return (
                            <View key={index} style={{ ...styles.container, marginBottom: index === children.length - 1 ? 0 : gap }}>
                                {child}
                            </View>
                        )
                    })
            }
        </View >
    );
}

Container.FullWidthSpaceBetween = (
    {
        fullWidth, centerItems,
        marginHorizontal, marginVertical,
        marginTop, marginBottom, marginLeft, marginRight,
        paddingVertical, paddingHorizontal,
        paddingTop, paddingBottom, paddingLeft, paddingRight,
        children
    } = props
) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: marginHorizontal,
            marginVertical: marginVertical,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        }
    });

    return (
        <View style={styles.container}>
            {children}
        </View >
    );
}


export { Container };
