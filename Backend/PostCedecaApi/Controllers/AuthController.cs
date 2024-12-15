using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly FirebaseAuthService _firebaseAuthService;

    public AuthController(FirebaseAuthService firebaseAuthService)
    {
        _firebaseAuthService = firebaseAuthService;
    }

    // POST: /auth/login
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (request == null || string.IsNullOrEmpty(request.IdToken))
        {
            return BadRequest("ID Token é obrigatório.");
        }

        try
        {
            var uid = await _firebaseAuthService.LoginAsync(request.IdToken);
            return Ok(new { Uid = uid });
        }
        catch (Exception ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }
}

// Modelo para o corpo da requisição
public class LoginRequest
{
    public string IdToken { get; set; }
}
