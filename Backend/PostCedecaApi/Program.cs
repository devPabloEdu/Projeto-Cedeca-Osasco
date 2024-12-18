using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
GoogleCredential.FromFile(Path.Combine(AppContext.BaseDirectory, "backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json"));

// Configuração do Firebase
if (FirebaseApp.DefaultInstance == null)
{
    FirebaseApp.Create(new AppOptions
    {
        Credential = GoogleCredential.FromFile("backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json")
    });
}

// Configurando serviços
builder.Services.AddScoped<FirestoreService>();
builder.Services.AddControllers();
builder.Services.AddScoped<FirebaseAuthService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Constrói o app
var app = builder.Build();

// Configurando middlewares e rotas
app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
