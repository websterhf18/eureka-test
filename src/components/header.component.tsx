// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  Text,
  StyleSheet,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

// ↓ models & types ↓

// ↓ navigation ↓

// ↓ screens ↓

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

type HeaderProps = {
  title?: string;
};

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.containerText}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#17a2b8',
    height: 85,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  containerText: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default Header;
