import { useState } from 'react';
import { FILTER_MODAL_CONFIG } from './config/FilterModalConfig';
import PrimaryIconBtn from '../../Buttons/PrimaryIconBtn';
import PrimaryIconTextBtn from '../../Buttons/PrimaryIconTextBtn';
import SecondarySearchButton from '../../Buttons/SecondarySearchButton';
import { CloseIcon } from '../../../assets/CloseIcon';
import { SearchIcon } from '../../../assets/SearchIcon';
import { ResetIcon } from '../../../assets/ResetIcon';
import { CheckIcon } from '../../../assets/CheckIcon';
import SectionHeaderPrimary from '../../Header/SectionHeaderPrimary';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export default function FilterModal({ isOpen, onClose, onApplyFilters }: FilterModalProps) {
  const [filters, setFilters] = useState(FILTER_MODAL_CONFIG.initialFilters);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters(FILTER_MODAL_CONFIG.initialFilters);
    onApplyFilters({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 border border-sera-pink/40 rounded-3xl shadow-2xl shadow-sera-pink/20 w-full max-w-md h-[80vh] flex flex-col animate-slide-up">

        {/* Header */}
        <SectionHeaderPrimary
          icon={FILTER_MODAL_CONFIG.header.icon}
          heading={FILTER_MODAL_CONFIG.header.title}
          subHeading={FILTER_MODAL_CONFIG.header.subtitle}
          rightSideAction={{
            component: <div className="w-8 h-8"><PrimaryIconBtn icon={CloseIcon} /></div>,
            onClick: onClose
          }}
          className="rounded-t-3xl"
        />

        {/* Content */}
        <div className="p-6 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
          {FILTER_MODAL_CONFIG.filters.map((filter, index) => (
            <div key={filter.key} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <label className="block text-white font-semibold text-sm mb-4 flex items-center">
                <div className="w-1 h-4 bg-gradient-to-b from-sera-pink to-sera-orange rounded-full mr-3"></div>
                {filter.label}
              </label>

              {filter.type === 'buttons' && filter.options && (
                <div className={`grid gap-3 ${filter.gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {filter.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange(filter.key, filters[filter.key as keyof typeof filters] === option.value ? '' : option.value)}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${filters[filter.key as keyof typeof filters] === option.value
                          ? filter.key === 'status'
                            ? 'bg-gradient-to-r from-sera-pink/20 to-sera-pink/10 border-sera-pink/60 text-sera-pink shadow-lg shadow-sera-pink/20'
                            : 'bg-gradient-to-r from-sera-blue/20 to-sera-blue/10 border-sera-blue/60 text-sera-blue shadow-lg shadow-sera-blue/20'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40 hover:text-white'
                        }`}
                    >
                      <span className="text-sm font-medium relative z-10">{option.label}</span>
                      {filters[filter.key as keyof typeof filters] === option.value && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {filter.type === 'select' && filter.options && (
                <div className="relative">
                  <select
                    value={filters[filter.key as keyof typeof filters]}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:border-sera-pink/50 focus:ring-4 focus:ring-sera-pink/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/15"
                  >
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value} className="bg-dark-800 text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}

              {filter.type === 'input' && (
                <div className="h-10">
                  <SecondarySearchButton
                    placeholder={filter.placeholder}
                    icon={SearchIcon}
                    iconColor="text-gray-400"
                    inputBg="bg-white/10"
                    inputHoverBg="hover:bg-white/15"
                    border="border-2"
                    borderColor="border-white/20"
                    borderHoverColor="border-sera-pink/50"
                    onClick={(searchTerm) => handleFilterChange(filter.key, searchTerm)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-dark-700/90 to-dark-600/90 border-t border-white/20 rounded-b-3xl p-6 flex-shrink-0">
          <div className="flex items-center justify-between space-x-4 h-10">
            <div className="flex-1 h-full">
              <PrimaryIconTextBtn
                text="Reset"
                leftIcon={ResetIcon}
                onClick={handleReset}
                className="border-2 border-white/30 hover:border-white/50"
                bgColor="bg-white/10"
                hoverBgColor="hover:bg-white/20"
              />
            </div>
            <div className="flex-1 h-full">
              <PrimaryIconTextBtn
                text="Apply Filters"
                leftIcon={CheckIcon}
                onClick={handleApply}
                isSolid={true}
                bgColor="bg-gradient-to-r from-sera-pink to-sera-orange"
                hoverBgColor="hover:from-sera-pink/90 hover:to-sera-orange/90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}