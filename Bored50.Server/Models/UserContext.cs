using Bored50.Domain;
using Microsoft.EntityFrameworkCore;

namespace Bored50.Server.Models;

public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
}
