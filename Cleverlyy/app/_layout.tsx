import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/SelectCountry" />
      <Stack.Screen name="login/SelectExam" />
      <Stack.Screen name="login/SelectSubject" />
      <Stack.Screen name="login/SelectYearGroup" />
      <Stack.Screen name="login/PlanSelectionScreen" />
      <Stack.Screen name="sidebar/subjects/RootSubjects.jsx" />
      <Stack.Screen name="sidebar/subjects/enrolledSubjects/PhysicsEd.jsx" />
      <Stack.Screen name="sidebar/subjects/topicQuestions/PhysicsEd.jsx" />
      <Stack.Screen name="sidebar/subjects/revisionNotes/physicsEd.jsx" />
      <Stack.Screen name="sidebar/subjects/pastPapers/physicsEd.jsx" />
      <Stack.Screen name="sidebar/subjects/resrc/YearWise.jsx" />
      <Stack.Screen name="sidebar/subjects/resrc/chapterWise.jsx" />
      <Stack.Screen name="sidebar/subjects/resrc/RevisionNotes.jsx" />
      <Stack.Screen name="sidebar/aiCheck/AiCheck.jsx" />
      <Stack.Screen name="sidebar/dashboard/RootDash.jsx" />
      <Stack.Screen name="sidebar/forum/rootForum.jsx" />
      <Stack.Screen name="sidebar/tipshints/rootTips.jsx" />
    </Stack>
  );
}
