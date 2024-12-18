using Google.Cloud.Firestore;

public class FirestoreService
{
    private readonly FirestoreDb _firestoreDb;

    public FirestoreService()
    {
         var credentialPath = Path.Combine(AppContext.BaseDirectory, "backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json");
    Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialPath);

    // Certifique-se que "meu-projeto-firebase" é o ID do projeto correto no Firebase
    _firestoreDb = FirestoreDb.Create("backendcedeca");
    }

    public async Task CreatePost(string title, string content, string imageUrl)
    {
        var post = new Dictionary<string, object>
        {
            { "Title", title },
            { "Content", content },
            { "ImageUrl", imageUrl },
            { "CreatedAt", Timestamp.GetCurrentTimestamp()}
        };
        await _firestoreDb.Collection("Posts").AddAsync(post);
    }

    public async Task<List<Dictionary<string, object>>> GetPosts()
    {
        var snapshot = await _firestoreDb.Collection("Posts").GetSnapshotAsync();
        return snapshot.Documents.Select(doc => doc.ToDictionary()).ToList();
    }
}