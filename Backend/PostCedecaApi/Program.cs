using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;

var builder = WebApplication.CreateBuilder(args);

// configurando o firebase kkkkk
FirebaseApp.Create(new AppOptions
{
    Credential = GoogleCredential.FromFile("backendcedeca-firebase-adminsdk-yl6cr-c24e8e4642.json")
});

//Configurando os controllers
builder.Services.AddControllers();
builder.Services.AddScoped<FirebaseAuthService>();
builder.Services.AddScoped<FirestoreService>();
var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();