// Import libraries for making a component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Make a component
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  // deconstruction from the argument
  const {
          thumbnailStyle,
          headerContentStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle
  } = styles;
  // deconstruction from styles (easier to use, quality of life change)


  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
/* 2 approaches:
One mega component that includes all the styling associated with the card;
using View, Image, Text and Button tags.
The alternative layout we can choose is using a Card and CardSection
we are going with option number 2 since it will be
more organized, short and easier to style.
*/

/* jusifyContent
'space-between' will put spaces at equal sizes between each element in the CardSection
so the top part and bottom part of the elements will be exactly on the container element.
'space-around' will put spaces at equal sizes between the container element and
the items within it and between the items them selves.

jusifyContent lets us move our text element vertically in the view element;
flex-end for bottom spot, center for center spot, flex-start top spot (default).

alignItems lets us move our text element horizontally in the view element;
flex-end for right spot, center for center spot, flex-start left spot (default).
*/

/*
we deconstructed our argument (props) to ({ album }) since we have more than one
reference to our props object, this way we can make the code shorter and cleaner.
we can also further deconstruct album
like this ({ album: { title, artist, thumbnail_image} }) but is a bit long.
second way to deconstruct it is like we did in our code above, deconstruct
inside of the function body.

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: props.album.thumbnail_image }} />
        </View>

        <View style={styles.headerTextStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};
*/

/* onPress
  onPress is passed as a prop to the Button component (we can choose another name
  than onPress, just a name for the prop passed).

  we do it this way since we want to make Button a reuseable component, since every
  time the user presses on it it needs to do something differently.

  hard coding the website inside the Button component would have made this component
  a NOT reuseable component.
  By adding the onPress prop it enabled us to do so.
*/

/* linking libarary
  linking is react-native (has an api) is used to interface our app with other
  apps the user has on his mobile device, like the broweser app for example or
  twitter or any other app the user has on thier device.

  so when ever we want a button to open the user browser at a specific url
  we need to use linking.
*/

/* click me!!!
  as we said, to make Button a reuseable component, we will also need
  to not hardcode click me!!! as we did (can see in the comments in Button),
  but to pass it as a prop so it can be different between each application.

  we can do it as we did with onPress and put it after onPress
  with text="Buy Now!"
  or we can use props.children as we did before which also keeps our code cleaner.
  (we will use the second way).
  After we add this change our button component will be completely reuseable.
*/

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
    // important: flex 1 and width null will stretch the picture the entire width of the device.
  }
};

// Make the component available to other parts of the app
export default AlbumDetail;
