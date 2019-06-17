import React from 'react'

import Grid from '../../common/layout/grid/grid'
import Row from '../../common/layout/row/row'
import ValueBox from '../../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='success' icon='university'
                    value={`€ ${credit}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='danger' icon='credit-card'
                    value={`€ ${debt}`} text='Total de Débitos' />
                <ValueBox cols='12 4' color='primary' icon='money-bill'
                    value={`€ ${credit - debt}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)