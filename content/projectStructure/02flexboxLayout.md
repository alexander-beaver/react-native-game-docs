---
title: "Flexbox Layout"

---

For our battle screen, we are going to want to use Flexbox for our layout. Flexbox is a sizing method that scales nicely across devices. The first thing that I organized in Flexbox is the battle screen.

The battle screen consistes of a flexbox column that has flexbox rows nested inside, to get the primarily verticle screen but that can have horizontal layout as well.

Our style is like this:
```js
styles = StyleSheet.create({

        full:{
            width: "100%",
            height: "100%"
        },

        flexCol:{
            display: "flex",
            flexDirection: "column"
        },

        flexRow:{
            display: "flex",
            flexDirection: "row"
        },

        flexItem:{
            display: "flex"
        },
        button:{
            backgroundColor: "#78e3b6",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center"
        },
        buttonText:{
            textAlign: "center"
        },

        flex1:{
            flex: 1
        },

        flex5:{
            flex: 5
        }


    });

```
We can then lay out our elements using styles in React Native like so:

```js
render(){

        // Return JSX that React Native will display
        return(
            <View style={[this.styles.flexCol, this.styles.full]}>
                <View style={[this.styles.flex5]}>
                    <Text>Placeholder for battle iamge</Text>
                </View>

                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <View style={[this.styles.flexItem]}><Text>100%</Text></View>
                </View>
                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 1</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 2</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Special 3</Text></TouchableOpacity>
                </View>
                <View style={[this.styles.flexRow, this.styles.flex1]}>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Shield</Text></TouchableOpacity>
                    <TouchableOpacity style={[this.styles.flexItem, this.styles.flex1, this.styles.button]}><Text style={[this.styles.buttonText]}>Escape</Text></TouchableOpacity>
                </View>



            </View>

        );
    }
```
When we run it, it looks like the following:

![Screenshot](https://photos.smugmug.com/Misc/WHS/n-QWxvWP/RN-Game-Media/i-GVSXDVt/0/32f87737/L/IMG_0819-L.png)
