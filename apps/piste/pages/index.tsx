import { useFeatureFlag } from "$services/appConfigClient"

export default function Web() {
  return (
    <div>
      <h1>AWS AppConfig Example</h1>
      <ChallengeEnabled />
      <SecondFlag />
    </div>
  )
}

function ChallengeEnabled() {
  const isChallengeEnabled = useFeatureFlag("isChallengeEnabled")

  console.log("RE_RENDERED", "isChallengeEnabled: ", isChallengeEnabled)

  return <div>isChallengeEnabled: {new String(isChallengeEnabled)}</div>
}

function SecondFlag() {
  const secondFlag = useFeatureFlag("secondFlag")

  console.log("RE_RENDERED", "secondFlag: ", secondFlag)

  return <div>secondFlag: {new String(secondFlag)}</div>
}
