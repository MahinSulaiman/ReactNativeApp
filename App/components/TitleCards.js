import { View, Text,ScrollView ,Image, Dimensions} from 'react-native'
import React from 'react'

export default function TitleCards({ useLanguageUrls }) {
    const cardWidth = Dimensions.get("window").width*0.35;
    const cardHeight=Dimensions.get("window").height*0.10; 

    const languageUrls=[
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8124/1714043448124-a",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6674/1526674-a-fdd5233a7699",
      
        ];

        const genreUrls=[
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5267/1535267-a-3cae422b372e",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5288/1535288-a-690bac400aa1",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5281/1535281-a-b56dc39e5bb7",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5302/1535302-a-e90748391e0d",
          "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5250/1535250-a-b320bf06458d",
        ];

        const urlsToUse = useLanguageUrls ? languageUrls : genreUrls;

  return (
    <ScrollView horizontal>
      {urlsToUse.map((title, index) => (
        <View key={index}>
        
            <Image
              style={{
                width: cardWidth,
                height: cardHeight,
                margin: 5,
                borderRadius: 5,
              }}
              source={{ uri: title }}
            />
          
        </View>
      ))}
    </ScrollView>
  )
}