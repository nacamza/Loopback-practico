
## Filtrado simple
http://localhost:3000/api/jugadores
http://localhost:3000/api/jugadores?filter[where][posicion]=delantero
http://localhost:3000/api/jugadores?filter[where][edad][gt]=30
http://localhost:3000/api/jugadores?filter[where][edad][lt]=29
http://localhost:3000/api/jugadores?filter[where][edad][lte]=25
http://localhost:3000/api/jugadores?filter[where][edad][gte]=25


## Filtrado compuesto
#### Jugadores mayores de 28 y que sean delanteros
http://localhost:3000/api/jugadores?filter[where][edad][gte]=28
http://localhost:3000/api/jugadores?filter[where][posicion]=delantero
http://localhost:3000/api/jugadores?filter[where][and][0][edad][gte]=28&filter[where][and][1][posicion]=delantero

#### Jugadores mayores se 20 años, delanteros e inactivos
http://localhost:3000/api/jugadores?filter[where][and][0][edad][gte]=20&filter[where][and][1][posicion]=delantero&filter[where][and][2][estado]=false


## Ordenamiento
http://localhost:3000/api/jugadores?filter[order]=edad
http://localhost:3000/api/jugadores?filter[order]=edad%20desc
http://localhost:3000/api/jugadores?filter[where][posicion]=delantero&filter[order]=edad
http://localhost:3000/api/jugadores?filter[where][posicion]=delantero&filter[order]=edad%20desc


## Inclusión y exclusión
http://localhost:3000/api/jugadores?filter[fields][nombre]=true
http://localhost:3000/api/jugadores?filter[fields][nombre]
http://localhost:3000/api/jugadores?filter[fields][nombre]=true&filter[fields][edad]=true
http://localhost:3000/api/jugadores?filter[where][estado]=true&filter[fields][estado]
http://localhost:3000/api/jugadores?filter[where][estado]=true&filter[fields][estado]&filter[order]=edad
http://localhost:3000/api/jugadores?filter[where][estado]=true&filter[fields][estado]&filter[order]=edad%20desc



## Paginado

#### Limit:    
http://localhost:3000/api/jugadores?filter[limit]=4
http://localhost:3000/api/jugadores?filter[where][edad][gte]=24&filter[limit]=2


#### Skip
http://localhost:3000/api/jugadores?filter[limit]=4&filter[skip]=2
http://localhost:3000/api/jugadores?filter[order]=edad
http://localhost:3000/api/jugadores?filter[order]=edad&filter[skip]=2

#### Count
http://localhost:3000/api/jugadores/count

## Alias


"scopes":{
    "novatos": {"where":{"edad":{ "lt":"25" }}},
    "veteranos": {"where":{"edad":{ "gte":"25" }}},
    "activos": {"where":{"estado":true}}
  }


http://localhost:3000/api/jugadores/novatos
http://localhost:3000/api/jugadores/novatos/count
http://localhost:3000/api/jugadores/veteranos
http://localhost:3000/api/jugadores/activos
http://localhost:3000/api/jugadores/activos?filter[fields][estado]