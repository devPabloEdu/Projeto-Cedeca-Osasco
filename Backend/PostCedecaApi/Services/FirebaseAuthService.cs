using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using System;
using System.Threading.Tasks;

public class FirebaseAuthService
{
    public FirebaseAuthService()
    {
        // Inicializa o FirebaseApp apenas uma vez
        if (FirebaseApp.DefaultInstance == null)
        {
            FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile("backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json")
            });
        }
    }

    // Método para validar o ID Token enviado pelo cliente
    public async Task<string> LoginAsync(string idToken)
    {
        try
        {
            // Verifica o ID token enviado pelo cliente
            var auth = FirebaseAuth.DefaultInstance;
            var decodedToken = await auth.VerifyIdTokenAsync(idToken);

            return decodedToken.Uid; // Retorna o UID do usuário autenticado
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao autenticar o usuário", ex);
        }
    }
}
