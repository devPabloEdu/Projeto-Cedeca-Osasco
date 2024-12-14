using Google.Cloud.Firestore;

public class FirestoreService
{
    private readonly FirestoreDb _firestoreDb;

    public FirestoreService()
    {
        _firestoreDb = FirestoreDb.Create("meu-projeto-firebase");
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