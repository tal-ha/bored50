namespace Bored50.Domain;

public abstract class BDomainObject<IdT>
{
    public IdT ID { get; set; }
}
