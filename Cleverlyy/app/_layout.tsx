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
      <Stack.Screen name="sidebar/dashboard/RootDash" />
      <Stack.Screen name="sidebar/subjects/RootSubjects" />
      <Stack.Screen name="sidebar/subjects/enrolledSubjects/PhysicsEd" />
      <Stack.Screen name="sidebar/subjects/topicQuestions/PhysicsEd" />
      <Stack.Screen name="sidebar/subjects/revisionNotes/physicsEd" />
      <Stack.Screen name="sidebar/subjects/revisionNotes/topicWiseRevision/physicsEd" />
      <Stack.Screen name="sidebar/subjects/pastPapers/rootPastPapers" />
      <Stack.Screen name="sidebar/resrc/rootResrc" />
      <Stack.Screen name="sidebar/resrc/subResrc/YearWise" />
      <Stack.Screen name="sidebar/resrc/subResrc/ChapterWise" />
      <Stack.Screen name="sidebar/resrc/subResrc/RevisionNotes" />
      <Stack.Screen name="sidebar/progress/rootProgress" />
      <Stack.Screen name="sidebar/notes/rootNotes" />
      <Stack.Screen name="sidebar/aiCheck/rootAiCheck" />
      <Stack.Screen name="sidebar/aiCheck/AiCheckResultView" />
      <Stack.Screen name="sidebar/calenders/rootCalenders" />
      <Stack.Screen name="sidebar/forum/rootForum" />
      <Stack.Screen name="sidebar/tipshints/rootTips" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
