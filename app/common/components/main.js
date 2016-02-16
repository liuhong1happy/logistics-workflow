var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;

var FeedView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>  
        )
    }
});
var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});
var DefaultView = React.createClass({

    render(){
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>Default view</Text>
          </View>
      )
    }
});

var MainApp = React.createClass({
    configureScene(route){
      return Navigator.SceneConfigs.FloatFromRight;
    },

    renderScene(router, navigator){
      var Component = null; this._navigator = navigator;
      switch(router.name){
        case "welcome":
          Component = WelcomeView;
          break;
        case "feed":
          Component = FeedView;
          break;
        default: //default view
          Component = DefaultView;
      }

      return <Component navigator={navigator} />
    },
    render() {
        return (
            <Navigator
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

})


var styles = StyleSheet.create({
    container:{
        marginTop:20
    }
})

module.exports = MainApp;