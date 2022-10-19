import { LayoutPage } from '../../components/Layout'
import { ContainerMain } from '../../components/Login/styles.login'
import { TitlePages } from '../Styled-Pages/styles'

export function DashboardPage() {
  return (
    <LayoutPage>
      <ContainerMain>
        <TitlePages>Dashboard </TitlePages>
        {/*        
type TypeCardProps = {
variant: 'up' | 'down'
tagPercentage: number
productNumber: number
radialPercentage: number
}

const cards: TypeCardProps[] = [
{
variant: 'up',
tagPercentage: 20,
productNumber: 60,
radialPercentage: 54,
},
{
variant: 'down',
tagPercentage: 20,
productNumber: 60,
radialPercentage: 54,
},
{
variant: 'up',
tagPercentage: 20,
productNumber: 60,
radialPercentage: 54,
},
{
variant: 'down',
tagPercentage: 20,
productNumber: 60,
radialPercentage: 54,
}
]

const productItems = [
  ]
  
export function Dashboard() {
return  (

<MainContainer>
<MainHeader title="Dashboard">
{cards.map(card => ( <ProductCard
  variant={card.variant}
  tagPercentage={card.tagPercentage}
  productNumber={card.productNumber}
  radialPercentage={card.radialPercentage}
  days={card.days}
  />
  ))}
</MainHeader>
<TableContainer>
<TableCard variant="up" itemsArray={productItems} title="products" />
<TableCard variant="down" itemsArray={productItems} title="clients" />
</TableContainer>
</MainContainer>
)
}  */}
      </ContainerMain>
    </LayoutPage>
  )
}
