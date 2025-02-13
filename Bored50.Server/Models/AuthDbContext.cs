using Bored50.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bored50.Server.Models;

public class AuthDbContext : IdentityDbContext<IdentityUser>
{
    public AuthDbContext(DbContextOptions options)
        : base(options)
    {
    }

public DbSet<Bored50.Domain.Activity> Activity { get; set; } = default!;

public DbSet<Bored50.Domain.Category> Category { get; set; } = default!;
}
