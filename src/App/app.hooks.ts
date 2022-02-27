import { useCallback, useEffect, useState } from "react";

import apiData from "common/utils/api";
import { Contact } from "common/types/contact";

export const useApp = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { isLoading, handleFetch, error, data } = useApi();

  const handleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const isSelected = (id: string) => selected.includes(id);

  return {
    contacts: data,
    error,
    handleFetch,
    handleSelect,
    isLoading,
    isSelected,
    totalSelected: selected.length,
  };
};

const useApi = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response: Contact[] = await apiData();

      setData((contacts) => [...contacts, ...response]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return {
    isLoading: loading,
    error,
    handleFetch,
    data,
  };
};
