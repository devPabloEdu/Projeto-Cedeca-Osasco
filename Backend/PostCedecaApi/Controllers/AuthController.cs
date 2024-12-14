[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly FirebaseAuthService _authService;

    public AuthController(FirebaseAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var token = await _authService.Login(request.Email, request.Password);
        return Ok(new {Token = token});
    }
}
