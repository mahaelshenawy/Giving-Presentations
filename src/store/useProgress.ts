import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  userName: string;
  setUserName: (name: string) => void;
  modulesCompleted: Record<string, boolean>;
  quizScores: Record<string, number>;
  completionDate?: string;
  setUserName: (name: string) => void;
  setQuizScore: (moduleId: string, score: number) => void;
  markModuleCompleted: (moduleId: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
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
      completionDate: undefined,
      setQuizScore: (moduleId, score) =>
        set((state) => ({
          quizScores: {
            ...state.quizScores,
            [moduleId]: score,
          },
        })),
      markModuleCompleted: (moduleId) =>
        set((state) => {
          const newModulesCompleted = {
            ...state.modulesCompleted,
            [moduleId]: true,
          };
          
          // Check if all modules are now completed
          const allCompleted = Object.values(newModulesCompleted).every(v => v === true);
          const completionDate = allCompleted && !state.completionDate 
            ? new Date().toLocaleString() 
            : state.completionDate;

          return {
            modulesCompleted: newModulesCompleted,
            completionDate
          };
        }),
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
          completionDate: undefined,
        }),
    }),
    {
      name: 'presentation-mastery-progress',
    }
  )
);
