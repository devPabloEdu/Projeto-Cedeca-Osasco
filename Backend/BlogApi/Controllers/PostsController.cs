using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    private static readonly List<Post> Posts = new();

    [HttpGet]
    public IActionResult GetAll() => Ok(Posts);

    public IActionResult Create([FromBody] Post post)
    {
        post.Id = Posts.Count + 1;
        post.CreatedAt = DateTime.UtcNow;
        Posts.Add(post);

        return CreatedAtAction(nameof(GetAll), new {id = post.Id}, post);
    }
}