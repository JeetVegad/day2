WITH SALES_CTE(SalesPersonID,SalesOrderID,Salesyear)
as
(
select SalesPersonID,SalesOrderID,YEAR(OrderDate) as salesyear from Sales.SalesOrderHeader
where SalesPersonID is not null
)
select SalesPersonID,COUNT(SalesOrderID) as totalsales,Salesyear from SALES_CTE
group by salesyear,SalesPersonID
order by SalesPersonID,Salesyear


with sales2_cte(id,numberoforder) as (
	select SalesPersonID,COUNT(*) from Sales.SalesOrderHeader
	where SalesPersonID is not null group by SalesPersonID
) select avg(numberoforder) as 'Average sales pere person' from sales2_cte


