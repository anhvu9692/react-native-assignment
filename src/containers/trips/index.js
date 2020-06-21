import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { actFetchTrips, actFetchDetails } from '../../actions';
import Trip from './components/Trip';

const Trips = (props) => {

  useEffect(() => {
    const getTrips = async () => {
      const resp = await fetch('https://api.gigacover.com/recruitment/challenge');
      const trips = await resp.json();
      props.actFetchTrips(trips.trips);
    };
    getTrips();
  }, []);

  const toDetails = (details) => {
    props.actFetchDetails(details);
    props.navigation.navigate('TripDetails')
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: 'gray',
          width: '100%',
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.tripReducer.trips}
        renderItem={({ item }) => <Trip trip={item} toDetails={toDetails}/>}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
};

const mapStateToProps = (state) => ({
  tripReducer: state.tripReducer
});
const mapDispatchToProps = (dispatch) => ({
  actFetchTrips: (trips) => dispatch(actFetchTrips(trips)),
  actFetchDetails: (details) => dispatch(actFetchDetails(details)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Trips);

