import React, {} from 'react';
import { View, Text } from 'react-native';
import {connect} from "react-redux";
import moment from 'moment';

const TripDetails = (props) => {

  const { details } = props.tripReducer;
  return (
    <View
      style={{ flex: 1 }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          margin: 15,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}
          >Trip id</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >{details.trip_id}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}
          >Distance</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >{details.distance}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}
          >Duration</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >{details.duration}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}
          >Start time</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >{moment(details.start_time).format('DD-MM-YYYY')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
            }}
          >End time</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >{moment(details.end_time).format('DD-MM-YYYY')}</Text>
        </View>
      </View>
    </View>
  )
};

const mapStateToProps = (state) => ({
  tripReducer: state.tripReducer
});


export default connect(mapStateToProps)(TripDetails);
