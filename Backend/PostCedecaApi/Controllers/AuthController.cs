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
        if (request == null || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
        {
            return BadRequest("Email e senha são obrigatórios.");
        }

        try
        {
            // O método LoginAsync foi alterado para aceitar o token de ID do cliente
            var token = await _firebaseAuthService.LoginAsync(request.Email, request.Password);
            return Ok(new { Token = token });  // Retorna o UID do usuário ou um token de acesso
        }
        catch (Exception ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }
}
