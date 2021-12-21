package auth

import (
	"fmt"
	"log"
	"time"

	. "github.com/fanama/next-react/Api/packages/auth/types"
	"github.com/golang-jwt/jwt"
)

func GenerateToken(user Form) map[string]string {

	// Create token
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["exp"] = time.Now().Add(time.Minute * 15).Unix()
	claims["iss"] = user.Username

	// Generate encoded token
	t, err := token.SignedString([]byte(Conf.JwtSecret))

	if err != nil {
		log.Fatalf("An Error Occured %v", err)
	}

	// Create refresh token
	refreshToken := jwt.New(jwt.SigningMethodHS256)
	rtClaims := refreshToken.Claims.(jwt.MapClaims)
	rtClaims["exp"] = time.Now().Add(time.Hour * time.Duration(Conf.JwtValidTime)).Unix()
	claims["iss"] = user.Username

	rt, err := refreshToken.SignedString([]byte(Conf.JwtSecret))

	if err != nil {
		log.Fatalf("An Error Occured %v", err)
	}

	return map[string]string{
		"access_token":  t,
		"refresh_token": rt,
	}
}

// Call Login API
func Login(user Form) (res LoginInfos, err error) {

	conf,err:=Init()

	if err!=nil{

		return res,err
	}

	if user.Username == conf.Username && user.Password == conf.Password {
		res = LoginInfos{Connect: true, IDUser: 0, AppId: 0, Role: "Admin"}
		return res, nil

	}

	err = fmt.Errorf("le user/mot de passe est incorrect")

	return res, err
}
