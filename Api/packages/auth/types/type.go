package types

type Configuration struct {
	JwtSecret    string `json:"JWT_SECRET"`
	JwtValidTime int    `json:"JWT_VALID_TIME"`
	LoginApi     string `json:"LOGIN_API"`
	Username     string
	Password     string
}

type Form struct {
	Username string `json:"username"`
	Password string `json:"password"`
	AppName  string `json:"appname"`
}

type LoginInfos struct {
	AppId   int
	Connect bool
	IDUser  int
	Role    string
}
