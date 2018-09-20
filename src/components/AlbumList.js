// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a component
class AlbumList extends Component {
  state = { albums: [] }; // step 1

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} album={album} />
       /*
          each component in the array must have a unique key associated with it,
          this is done for performance concerns;
          the key enables react to know which item it is updating at any given time.
          key must be unique relative to all other elements in the array.
          you can use as a key the resource (album in this case) id (here we dont have one).
       */
       // deleting the closing tag to make it a self closing component.
       /*
       passing a prop from parent component to child component;
       album={album}    (does not have to call it album=    we can use another name),
       name of the prop does not have to be the same as the name of the variable;
       and then we use it like props.album or props.name accordingly.
       */
     );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

/* we need to refactor the component above from a
functional component (that presents data on the screen)
const AlbumList = () => {
  return (
    <View>
      <Text>Album List!!!!</Text>
    </View>
  );
};
to a class component (see original code)
that fetches data using an http request from the server.
(or if we need a bigger component with helper methods).
class component must have a render method.
*/

/*
componentWillMount() is a life cycle method which reside only in class based components.
it enables the class component to know when it need to shows on the screen or when to be removed.
life cycle methods are never in functional components.
functional component are just like a pipe, code comes in on one side shows on screen on the other.

when a life cycle method is called the class component its in will mount; each time
the class based component will be rendered to the screen
the componentWillMount() method will be called for us.
*/

/*
class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

the axios.get method returns a promise from the server, to notify us once the data is retrived.
we pass this promise to then method,
so it notifies us on the console what did we get from the server.
this is how we fetch our data from the api.

remember to install axios in the folder where you project is,
in the cmd go to ur app folder and write
npm install --save axios
*/

/*
once you change the state of the component, the component will rerender it self
to the mobile device screen.
we need to enable component level state inside our albumlist component.

state is a javascript object used to
record data
and respond to user triggered events.
only change state with setState and not this.state
state is avilable to class based components only.

done in 3 stepps:
1. set initial state of component.
2. after data is fetched we need to tell our componenet state to update.
3. make sure our compnent make use of this new state with the data.

this.setState is the only way to update a component set state;
never!!! use something like: this.state = { albums: [ {} {} ...] }
the way above is only used for initialyzing and not for modification as we did
in our code above.

since we called this.setState the component albumList rerender it self to the screen
(not the App component or the Header component.), just albumList.

the differance between state and properties(props):
when we want to communicate from a parent component to a child component we use props.
for component internal record keeping we use a state.
*/

/* ScrollView tags makes everything within the tag scrollable
   when ever we use ScrollView we must add a style property of
   flex 1 to the root view element (root view element is in index.android.js),
   this will prevent from the screen to scrool back up after everytime we scroll down.
*/

// Make the component available to other parts of the app
export default AlbumList;
