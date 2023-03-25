import { Card, CardHeader, Persona, Checkbox } from "@fluentui/react-components"
import styled from "styled-components"

const StyledCard = styled(Card)`
  max-width: 250px;
`

export function ParticipantCard() {
  return (
    <StyledCard size="small">
      <CardHeader
        header={<Persona name="Andrew Craswell" secondaryText="Pools" presence={{ status: "available" }} />}
        action={<Checkbox />}
      />
    </StyledCard>
  )
}
