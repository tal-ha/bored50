namespace Bored50.Domain;

public class Category : BDomainObject<long>
{
    public Category()
    {

    }

    public string Name { get; set; }

    public string Description { get; set; }

    public Category SubCategory { get; set; }
}
