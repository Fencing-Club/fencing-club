import { Card, CardHeader, Persona, Checkbox } from "@fluentui/react-components"
import styled from "styled-components"
import { useAppTheme } from "../../AppThemeProvider/useAppTheme"

const StyledCard = styled(Card)`
  max-width: 250px;
`

export function ParticipantCard() {
  const { setTheme } = useAppTheme()

  return (
    <StyledCard size="small">
      <CardHeader
        header={<Persona name="Andrew Craswell" secondaryText="Pools" presence={{ status: "available" }} />}
        action={
          <Checkbox
            onChange={(e, v) => {
              setTheme(e.target.checked ? "dark" : "light")
            }}
          />
        }
      />
    </StyledCard>
  )
}
