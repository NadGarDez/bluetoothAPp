import * as React from "react";
import {Header} from "react-native-elements"

export const HeaderComponent = ({LeftContent,CenterContent,RightContent})=>{
  return (
      <Header
        leftComponent={LeftContent!== undefined && <LeftContent />}
        centerComponent={CenterContent!== undefined && <CenterContent/>}
        rightComponent={RightContent!== undefined && <RightContent />}
      />
  )
}
