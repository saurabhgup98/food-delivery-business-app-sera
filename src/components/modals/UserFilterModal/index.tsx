import { useState } from 'react';
import PrimaryIconBtn from '../../Buttons/PrimaryIconBtn';
import PrimaryIconTextBtn from '../../Buttons/PrimaryIconTextBtn';
import PrimarySelectBtn from '../../Buttons/PrimarySelectBtn';
import { PrimarySelectDropdown } from '../../dropdowns';
import SecondarySearchButton from '../../Buttons/SecondarySearchButton';
import SectionHeaderPrimary from '../../Header/SectionHeaderPrimary';
import { UserFilterModalProps } from './types';

import {
    getSectionHeaderBtnProps,
    getSearchBtnProps,
    getResetBtnProps,
    getApplyBtnProps,
    getUserFilterModalConfig,
    getUserFilterModalSectionHeaderProps,
    getUserFilterSectionClasses,
    getSelectBtnFilterProps,
    getUserFilterSearchInputClasses,
    getUserFilterContentSectionClasses,
    getUserFilterFooterClasses,
    getUserFilterModalClasses
} from '../../utils/modals/UserFilterModalUtils';

export default function UserFilterModal({ isOpen, onClose, onApplyFilters }: UserFilterModalProps) {
    const config = getUserFilterModalConfig();
    const modalClasses = getUserFilterModalClasses();
    const [filters, setFilters] = useState(config.initialFilters);

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prev: any) => ({ ...prev, [key]: value }));
    };

    const handleApply = () => {
        onApplyFilters(filters);
        onClose();
    };

    const handleReset = () => {
        setFilters(config.initialFilters);
        onApplyFilters({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={modalClasses.overlay}>
            <div className={modalClasses.container}>

                {/* Header */}
                <SectionHeaderPrimary
                    {...getUserFilterModalSectionHeaderProps(onClose)}
                    rightSideAction={{
                        component: <div className="w-8 h-8"><PrimaryIconBtn {...getSectionHeaderBtnProps(onClose)} /></div>,
                        onClick: onClose
                    }}
                />

                {/* Content */}
                <div className={modalClasses.content}>
                    {config.filters.map((filter: any, index: number) => {
                        const sectionClasses = getUserFilterContentSectionClasses(index);
                        return (
                            <div key={filter.key} className={sectionClasses.section} style={sectionClasses.style}>
                                <label className={sectionClasses.label}>
                                    <div className={sectionClasses.labelAccent}></div>
                                    {filter.label}
                                </label>

                                {filter.type === 'buttons' && filter.options && (
                                    <div className={getUserFilterSectionClasses(filter.type, filter.gridCols)}>
                                        {filter.options.map((option: any) => {
                                            const isSelected = filters[filter.key as keyof typeof filters] === option.value;
                                            return (
                                                <PrimarySelectBtn
                                                    key={option.value}
                                                    {...getSelectBtnFilterProps(
                                                        filter.key,
                                                        option.label,
                                                        () => handleFilterChange(filter.key, isSelected ? '' : option.value),
                                                        isSelected
                                                    )}
                                                />
                                            );
                                        })}
                                    </div>
                                )}

                                 {filter.type === 'select' && filter.options && (
                                     <PrimarySelectDropdown
                                         options={filter.options}
                                         value={filters[filter.key as keyof typeof filters]}
                                         onChange={(value: string) => handleFilterChange(filter.key, value)}
                                         placeholder={`Select ${filter.label.toLowerCase()}`}
                                         size="md"
                                     />
                                 )}

                                {filter.type === 'input' && (() => {
                                    const searchClasses = getUserFilterSearchInputClasses();
                                    return (
                                        <div className={searchClasses.container}>
                                            <SecondarySearchButton
                                                placeholder={filter.placeholder}
                                                {...getSearchBtnProps()}
                                                onClick={(searchTerm: string) => handleFilterChange(filter.key, searchTerm)}
                                            />
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className={modalClasses.footer}>
                    {(() => {
                        const footerClasses = getUserFilterFooterClasses();
                        return (
                            <div className={footerClasses.container}>
                                <div className={footerClasses.buttonContainer}>
                                    <PrimaryIconTextBtn {...getResetBtnProps(handleReset)} />
                                </div>
                                <div className={footerClasses.buttonContainer}>
                                    <PrimaryIconTextBtn {...getApplyBtnProps(handleApply)} />
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}