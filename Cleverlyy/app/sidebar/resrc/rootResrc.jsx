import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const rootResrc = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Root Resrc</Text>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/resrc/subResrc/YearWise",
          }}
        >
          <Text>Year Wise</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/resrc/subResrc/ChapterWise",
          }}
        >
          <Text>Chapter Wise</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link
          href={{
            pathname: "sidebar/resrc/subResrc/RevisionNotes",
          }}
        >
          <Text>Revision Notes</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default rootResrc;
