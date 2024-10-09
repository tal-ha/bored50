namespace Bored50.Domain;

public class User : BDomainObject<long>
{
    public User()
    {
    }

    public string Username { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

}