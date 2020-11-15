import React, {useState} from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [CurrentUser, setCurrentUser] = useState({});
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <AuthContext.Provider 
            value = {{
                CurrentUser: CurrentUser, 
                setCurrentUser: setCurrentUser,
                IsLoggedIn: IsLoggedIn,
                setIsLoggedIn: setIsLoggedIn,
            }}
        >  {/*shather value prop niye jabe jeta ekta object.. baki shb file er kache available hbe*/}
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};