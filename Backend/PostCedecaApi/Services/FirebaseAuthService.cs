using Firebase.Auth;

public class FirebaseAuthService
{
    private const string ApiKey = "AIzaSyBncC4V8HNKIFIka-HuW_RlCAwGHnQss9U";

    public async Task<string> Login(string email, string password)
    {
        var authProvider = new FirebaseAuthProvider(new FirebaseConfig(ApiKey));
        var auth = await authProvider.SignInWithEmailAndPasswordAsync(email, password);
        return auth.FirebaseToken;
    }
}