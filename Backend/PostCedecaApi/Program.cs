using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Configurando o Firebase (uma vez só)
FirebaseApp.Create(new AppOptions
{
    Credential = GoogleCredential.FromFile("backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json")
});

// Configurando CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000")  // Permite apenas esse domínio
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Adicionando serviços
builder.Services.AddControllers();
builder.Services.AddScoped<FirebaseAuthService>();
builder.Services.AddScoped<FirestoreService>();

var app = builder.Build();

// Usando CORS
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
