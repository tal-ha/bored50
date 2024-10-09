namespace Bored50.Domain;

public class Activity : BDomainObject<long>
{
    public Activity()
    {
    }

    public string Title { get; set; }

    public string Description { get; set; }

    public Category Category { get; set; }

}