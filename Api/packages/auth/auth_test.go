package auth

import (
	"testing"

	. "github.com/fanama/next-react/Api/packages/auth/types"
)

func TestLogin(t *testing.T) {

	var user Form = Form{Username: "fana", Password: "password"}

	res, err := Login(user)

	if err != nil {
		t.Errorf("error : %v", err.Error())
	}

	if !res.Connect {
		t.Errorf("connexion impossible,%v vérifiez l'adrresse de login ", res)

	}

}

func TestLoginFail(t *testing.T) {

	var user Form = Form{Username: "bidon", Password: "PSGjJ49E6", AppName: "TagTool"}

	res, err := Login(user)

	if err == nil {
		t.Errorf("error : %v", err.Error())
	}

	if res.Connect {
		t.Errorf("connexion réussie il y a une faille %v  ", res)

	}

}
