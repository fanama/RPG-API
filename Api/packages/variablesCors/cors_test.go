package variablesCors

import "testing"

func TestCors(t *testing.T) {
	if Cors.Port == "" || Cors.Origin == "" || Cors.Methods == "" {
		t.Errorf("erreur : Veuillez remplir conf/cors.json ")

	}
}
