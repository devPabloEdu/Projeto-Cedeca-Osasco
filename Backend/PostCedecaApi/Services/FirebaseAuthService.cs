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

    // Método para criar um token para o cliente
    public async Task<string> LoginAsync(string email, string password)
    {
        try
        {
            // Não podemos validar a senha diretamente aqui, pois FirebaseAdmin não suporta isso
            // Você precisará que o cliente autentique com email/senha e envie o token para validar no backend

            // Se o cliente autenticou com sucesso e obteve o token, você pode verificar o token aqui
            var auth = FirebaseAuth.DefaultInstance;

            // Verifica o ID token enviado pelo cliente
            var user = await auth.VerifyIdTokenAsync(password);  // Aqui 'password' deve ser o ID Token

            return user.Uid; // Retorna o UID do usuário autenticado
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao autenticar o usuário", ex);
        }
    }
}
