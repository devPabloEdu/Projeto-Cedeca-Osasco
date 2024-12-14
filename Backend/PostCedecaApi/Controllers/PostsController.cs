using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    private readonly FirestoreService _firestoreService;

    public PostsController(FirestoreService firestoreService)
    {
        _firestoreService = firestoreService;
    }

    [HttpPost]
    public async Task<IActionResult> CreatePost([FromBody] PostRequest request)
    {
        await _firestoreService.CreatePost(request.Title, request.Content, request.ImageUrl);
        return Ok("Post criado com sucesso!");
    }

    [HttpGet]
    public async Task<IActionResult> GetPosts()
    {
        var posts = await _firestoreService.GetPosts();
        return Ok(posts);
    }

}