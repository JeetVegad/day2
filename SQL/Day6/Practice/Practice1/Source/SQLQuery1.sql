select p.Name from Production.Product p

select pc.Name as CategoryName,
		ps.Name as SubCaategoryName,
		pc.ProductCategoryID as 'Pc.ProductCategoryId',
		ps.ProductcategoryID as 'Ps.ProductcategoryID'
from Production.ProductCategory as pc inner join Production.ProductSubcategory ps on 
pc.ProductCategoryID = ps.ProductCategoryID