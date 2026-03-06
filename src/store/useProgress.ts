import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  userName: string;
  setUserName: (name: string) => void;
  modulesCompleted: Record<string, boolean>;
  quizScores: Record<string, number>;
  setQuizScore: (moduleId: string, score: number) => void;
  markModuleCompleted: (moduleId: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      userName: '',
      setUserName: (name) => set({ userName: name }),
      modulesCompleted: {
        module0: false,
        module1: false,
        module2: false,
        module3: false,
        module4: false,
        module5: false,
        module6: false,
      },
      quizScores: {},
      setQuizScore: (moduleId, score) =>
        set((state) => ({
          quizScores: {
            ...state.quizScores,
            [moduleId]: score,
          },
        })),
      markModuleCompleted: (moduleId) =>
        set((state) => ({
          modulesCompleted: {
            ...state.modulesCompleted,
            [moduleId]: true,
          },
        })),
      resetProgress: () =>
        set({
          userName: '',
          modulesCompleted: {
            module0: false,
            module1: false,
            module2: false,
            module3: false,
            module4: false,
            module5: false,
            module6: false,
          },
          quizScores: {},
        }),
    }),
    {
      name: 'presentation-mastery-progress',
    }
  )
);
