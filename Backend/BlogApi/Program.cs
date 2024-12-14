using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Configuração do JWT
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "yourissuer",
            ValidAudience = "youraudience",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourSecretKey"))
        };
    });

//Adiciona controladores e endpoints da API
builder.Services.AddAuthorization();

builder.Services.AddControllers();

var app = builder.Build();
// Adiciona autenticação e autorização ao pipeline
app.UseAuthentication(); // Verifica se a requisição tem um token válido
app.UseAuthorization(); // Verifica se o usuário tem permissão para acessar a rota
// Mapeia as rotas dos controladores
app.MapControllers();
app.Run();