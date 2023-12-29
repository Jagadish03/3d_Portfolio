import React from 'react'

//^ renderContent is used whenever we move island it has to show different message at different places
const renderContent ={            //& object
    1:(                           //& content
        <h1>1</h1>
    ),
    2:(                           //& content
        <h1>2</h1>
    ),
    3:(                           //& content
        <h1>3</h1>
    ),
    4:(                           //& content
        <h1>4</h1>
    ),
}

const HomeInfo = ({currentStage}) => {  //& as props we are getting currentStage
  return renderContent[currentStage] || null;
}

export default HomeInfo